import { useParams } from "react-router-dom";


import ProjectList from '../projects/ProjectList.json'
import { NavBar } from "../components/NavBar";
import { Carousel } from "../components/Carousel";

interface ProjectData{
  id: string,
  title: string,
  url: string,
  description: string,
  images: {
    card: string,
    hero: string,
    gallery: string[]
  }
}

export default function Project() {
    let { id } = useParams();

    const projects: ProjectData[] = ProjectList as ProjectData[];
    const project = projects.find(project => project.id === id);

    document.title = project?.title || "Project";

    return (
      <div className="min-h-screen bg-base-200">
        <NavBar></NavBar>
        <div className="flex pt-32">
          <div className="w-1/3 ml-10">
            <h1 className="text-5xl font-bold">{project?.title}</h1>
            <p className="py-6 max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in blandit odio. Cras vestibulum convallis efficitur. Cras in lorem eu justo fringilla ultrices vel sit amet risus. Morbi et ex a nisi gravida iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a nibh quis tortor gravida sagittis. Sed non eros at sapien pretium aliquet non ut elit. Sed ornare cursus convallis. Integer aliquam vel nisl et ultrices. Sed fringilla nisl et scelerisque lacinia.

Maecenas a lectus vitae elit luctus tristique eu vitae velit. Cras semper mollis enim, et ultricies est ultrices quis. Suspendisse potenti. Etiam arcu magna, convallis quis libero condimentum, dictum luctus nulla. Donec vehicula hendrerit sem ac ullamcorper. Vestibulum finibus erat eget sem rutrum commodo. Etiam sagittis lorem a lorem luctus laoreet. Fusce quis blandit augue. In commodo velit non turpis ultricies blandit. Sed mattis gravida ullamcorper. Proin at suscipit quam. Phasellus convallis elit a dictum convallis. Integer sodales sollicitudin dui eu sollicitudin. Suspendisse massa elit, pellentesque sed consectetur nec, rutrum nec eros. Curabitur scelerisque in nisl id efficitur.

Maecenas placerat euismod tortor id scelerisque. Suspendisse sem nisi, fermentum ac tortor vitae, sollicitudin placerat tellus. Quisque vel malesuada erat, vitae fringilla tellus. Duis ut ante justo. Pellentesque auctor lorem tristique, condimentum ligula sit amet, finibus est. Integer ultrices sem quis nisl vehicula, eu rhoncus diam egestas. Aenean velit ipsum, aliquam vel rutrum a, ullamcorper ac tellus. Suspendisse nunc massa, vehicula a leo sed, fringilla viverra dui. Sed lectus leo, porta non venenatis at, lacinia eu nisl. Mauris in neque dolor. Nunc volutpat enim risus, at ullamcorper mi vestibulum vitae. Donec nec facilisis tortor, rutrum luctus metus. Sed pharetra posuere mauris, et consequat justo scelerisque non.

</p>
          </div>
          <div className="w-2/3">
            {
              project?.images.gallery.length === 0 && <img src={project?.images.hero} alt="dasdasd" className="p-24 pt-0 w-full" />
            }
            {
              project?.images.gallery.length !== 0 && <Carousel images={project?.images.gallery || []} />
            }
          </div>
        </div>
    </div>
    );
  }
  