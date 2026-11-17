import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from "@tanstack/react-router";
import { projects } from "./projects-data";

export default function ProjectsDetailsPage() {
  const { projectId } = useParams({ from: "/projects/$projectId" });
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="text-violet-300 hover:underline">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <Link
          to="/projects"
          className="text-sm text-zinc-400 transition hover:text-zinc-100"
        >
          ← Back to projects
        </Link>
      </div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 space-y-6">
          <p className="text-zinc-400">{project.description}</p>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-fit rounded-lg bg-zinc-900 p-1">
              <TabsTrigger
                value="overview"
                className="text-zinc-400 hover:text-zinc-100 data-active:border-zinc-600 data-active:bg-zinc-800 data-active:text-zinc-100"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="technologies"
                className="text-zinc-400 hover:text-zinc-100 data-active:border-zinc-600 data-active:bg-zinc-800 data-active:text-zinc-100"
              >
                Technologies
              </TabsTrigger>
              <TabsTrigger
                value="links"
                className="text-zinc-400 hover:text-zinc-100 data-active:border-zinc-600 data-active:bg-zinc-800 data-active:text-zinc-100"
              >
                Demo & Source
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.overview}</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>

            <TabsContent value="technologies">
              <Card>
                <CardHeader>
                  <CardTitle> Tech Stack</CardTitle>
                  <CardDescription>
                    {project.technologies.length > 0 ? (
                      <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-md border border-zinc-700 px-2.5 py-1 text-sm text-zinc-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Add this project's technologies in projects-data.ts.
                      </p>
                    )}
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>

            <TabsContent value="links">
              <Card>
                <CardHeader>
                  <CardTitle>Project links</CardTitle>
                  <CardDescription>
                    {project.liveUrl || project.sourceUrl ? (
                      <p className="text-sm text-muted-foreground">
                        Check out the live demo and source code for this
                        project.
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Add the demo and source URLs in projects-data.ts.
                      </p>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 hover:underline"
                    >
                      Live demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 hover:underline"
                    >
                      Source code
                    </a>
                  )}
                  {!project.liveUrl && !project.sourceUrl && (
                    <p className="text-muted-foreground">
                      Add the demo and source URLs in projects-data.ts.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex min-w-0 items-center">
          {project.images.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image) => (
                  <CarouselItem key={image.src}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-2">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="aspect-video w-full rounded-md object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </>
              )}
            </Carousel>
          ) : (
            <Card className="w-full">
              <CardContent className="flex aspect-video items-center justify-center p-6 text-center text-sm text-muted-foreground">
                Add project images in projects-data.ts.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
