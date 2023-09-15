import Explanation from '../components/monitoring/Explanation';
import MonitoringHeaderImage from '../components/monitoring/MonitoringHeaderImage';
import Patient from '../components/monitoring/Patient';
import Solve from '../components/monitoring/Solve';

const MonitoringPage = () => {
  return (
    <>
      <MonitoringHeaderImage />
      <Patient />
      <Solve />
      <Explanation />
    </>
  );
};

export default MonitoringPage;
