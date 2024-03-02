import './JoinUs.css';
import JoinUsEmailForm from './JoinUsEmailForm/JoinUsEmailForm';
import JoinUsHeader from './JoinUsHeader/JoinUsHeader';

const JoinUs = () => {
  return (
    <section className='join-us' id='join-us'>
      <div className="left-j">
        <JoinUsHeader />
      </div>
      <div className="right-j">
        <JoinUsEmailForm />
      </div>
    </section>
  )
}

export default JoinUs;