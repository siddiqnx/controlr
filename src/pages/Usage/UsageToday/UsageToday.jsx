import React, { useState, useEffect } from 'react'
import { DateTime, Duration } from 'luxon';
import { SectionHeader } from 'components/Headers/SectionHeader'
import { useMutation, queryCache } from 'react-query';
import { fetchUsageTimeseries } from 'requests/usage/fetchUsageTimeseries';
import { ChartContainer } from 'components/SectionContainers/ChartContainer';
import { UsageAreaChart } from 'components/Charts/UsageAreaChart';

export const UsageToday = () => {
  const [usageTimeseries, setUsageTimeseries] = useState(queryCache.getQueryData('usageTimeseries'));
  const [getUsageTimeseries] = useMutation(fetchUsageTimeseries, {
    onSuccess: (data) => {
      queryCache.setQueryData(['usageTimeseries'], data);
      setUsageTimeseries(data);
    }
  });

  useEffect(() => {
    getUsageTimeseries({
      startTs: DateTime.local().toUTC().startOf('day').toISO(),
      endTs: DateTime.local().plus(Duration.fromObject({ hours: 1 })).toUTC().startOf('hour').toISO(),
      frequency: 'hour'
    });
  }, []);

  console.log(usageTimeseries);


  return (
    <section>
      <SectionHeader
        level={2}
        text='Usage Today'
      />

      {usageTimeseries &&
        <UsageAreaChart usageData={usageTimeseries} />
      }

    </section>
  )
}
