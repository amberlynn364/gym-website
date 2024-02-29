import './Programs.css';
import ProgramsCategories from './ProgramsCategories/ProgramsCategories';
import ProgramsHeader from './ProgramsHeader/ProgramsHeader';


const Programs = () => {
  return (
    <section className='programs' id='programs'>
      <ProgramsHeader />
      <ProgramsCategories />
    </section>
  )
}

export default Programs;