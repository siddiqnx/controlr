import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools'
import { Home } from 'pages/Home/Home';
import { Rooms } from 'pages/Rooms/Rooms';
import { Usage } from 'pages/Usage/Usage';
import { Rules } from 'pages/Rules/Rules';
import { Events } from 'pages/Events/Events';
import { Navbar } from 'components/Navbar/Navbar';
import { Login } from 'pages/Login/Login';
import { RoomDetail } from 'pages/RoomDetail/RoomDetail';
import { DeviceDetail } from 'pages/DeviceDetail/DeviceDetail';
import { AuthContext } from 'contexts/AuthContext';
import { UserContext } from 'contexts/UserContext';
import { fetchBuildingList } from 'requests/buildings/fetchBuildingList';
import { AddDevice } from 'pages/Forms/AddDevice';
import { Sidebar } from 'components/Asides/Sidebar';
import { AddBuilding } from 'pages/Forms/AddBuilding';
import { AddRoom } from 'pages/Forms/AddRoom';


const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      render={() =>
        isAuthenticated() ? (
          <>{children}</>
        ) : (
            <Redirect to="/login" />
          )
      }
      {...rest}
    />
  )
}

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { setCurrentBuilding } = useContext(UserContext);

  const { data } = useQuery('buildings', fetchBuildingList, {
    enabled: isAuthenticated()
  })

  useEffect(() => {

    if (data && !localStorage.getItem('currentBuilding')) {
      setCurrentBuilding(data[0].id);
    }
  }, [data, setCurrentBuilding]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path='/rooms/:roomId/add/'>
            <AddDevice />
          </ProtectedRoute>
          <ProtectedRoute path='/rooms/add/'>
            <AddRoom />
          </ProtectedRoute>
          <ProtectedRoute path='/buildings/add'>
            <AddBuilding />
          </ProtectedRoute>
          <ProtectedRoute path='/rooms/:roomId/devices/:deviceId'>
            <DeviceDetail />
          </ProtectedRoute>
          <Route path='/rooms/:roomId'>
            <RoomDetail />
          </Route>
          <ProtectedRoute path="/rooms">
            <Rooms />
          </ProtectedRoute>
          <ProtectedRoute path="/usage">
            <Usage />
          </ProtectedRoute>
          <ProtectedRoute path="/rules">
            <Rules />
          </ProtectedRoute>
          <ProtectedRoute path="/events">
            <Events />
          </ProtectedRoute>
          <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>

        </Switch>
        <Sidebar />
        <Navbar />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;