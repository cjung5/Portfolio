import uniqid from 'uniqid'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import LaunchIcon from '@material-ui/icons/Launch'
import './ResearchContainer.css'

const ResearchContainer = ({ research }) => (
  <div className='research'>
    <h3>{research.name}</h3>

    <p className='research__description'>{research.description}</p>
    {research.data_stack && (
      <ul className='research__stack'>
        {research.data_stack.map((item) => (
          <li key={uniqid()} className='research__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    {research.stack && (
      <ul className='research__stack'>
        {research.stack.map((item) => (
          <li key={uniqid()} className='research__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {research.paperLink && (
      <a
        href={research.paperLink}
        aria-label='paper link'
        className='link link--icon'
      >
        <ArticleOutlinedIcon />
      </a>
    )}

    {research.livePreview && (
      <a
        href={research.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ResearchContainer
