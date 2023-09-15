import CoreFunction from '../components/monitoring/CoreFunction';
import Explanation from '../components/monitoring/Explanation';
import MonitoringHeaderImage from '../components/monitoring/MonitoringHeaderImage';
import Patient from '../components/monitoring/Patient';
import Process from '../components/monitoring/Process';
import Solve from '../components/monitoring/Solve';

const MonitoringPage = () => {
  return (
    <>
      <MonitoringHeaderImage />
      <Patient />
      <Solve />
      <Explanation />
      <Process />
      <CoreFunction />
    </>
  );
};

export default MonitoringPage;
