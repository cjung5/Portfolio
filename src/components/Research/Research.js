import uniqid from 'uniqid'
import { research } from '../../portfolio'
import ResearchContainer from '../ResearchContainer/ResearchContainer'
import './Research.css'

const Research = () => {
  if (!research.length) return null

  return (
    <section id='research' className='section researchSection'>
      <h2 className='section__title'>Research</h2>

      <div className='research__grid'>
        {research.map((rs) => (
          <ResearchContainer key={uniqid()} research={rs} />
        ))}
      </div>
    </section>
  )
}

export default Research
