
interface IProjectCard {
  id: number,
  name: string,
  budget: number,
  category: string,
  handleRemove: () => void
}
function ProjectCard (project: IProjectCard) {
  return <p>projeto</p>
}

export default ProjectCard
