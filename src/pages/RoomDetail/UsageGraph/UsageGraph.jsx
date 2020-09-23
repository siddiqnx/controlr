import React, { useState, useEffect } from 'react'
import { DateTime, Duration } from 'luxon';
import { SectionHeader } from 'components/Headers/SectionHeader'
import { useMutation, queryCache } from 'react-query';
import { fetchUsageTimeseries } from 'requests/usage/fetchUsageTimeseries';
import { UsageAreaChart } from 'components/Charts/UsageAreaChart';
import { useParams } from 'react-router-dom';

export const UsageGraph = () => {
  const { roomId } = useParams();
  const [usageTimeseries, setUsageTimeseries] = useState(queryCache.getQueryData(['usageTimeseries', { room: roomId }]));
  const [getUsageTimeseries] = useMutation(fetchUsageTimeseries, {
    onSuccess: (data) => {
      queryCache.setQueryData(['usageTimeseries', { room: roomId }], data);
      setUsageTimeseries(data);
    }
  });

  useEffect(() => {
    getUsageTimeseries({
      roomId,
      startTs: DateTime.utc().startOf('day').minus(Duration.fromObject({ days: 7 })).toISO(),
      endTs: DateTime.utc().startOf('day').plus(Duration.fromObject({ days: 1 })).toISO(),
      frequency: 'day'
    });
  }, []);


  return (
    <section>
      <SectionHeader
        level={2}
        text='Usage'
        description='Past 7 days'
      />

      {usageTimeseries &&
        <UsageAreaChart usageData={usageTimeseries} />
      }

    </section>
  )
}
