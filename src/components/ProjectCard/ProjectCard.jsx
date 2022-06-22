import './ProjectCard.scss'

export default function ProjectCard({details}){
  return (
    <div className='projectCard'>
        <span className="title">{details.projectName}</span>
        <span className="desc">{details.desc}</span>
        <span className="cat">{details.category}</span>
    </div>
  )
}