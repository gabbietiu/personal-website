import {
  ActionIcon,
  Container,
  Flex,
  Image,
  Space,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { toolColorMapping } from "../utils/toolColorMapping";
import { websitesList } from "../info/websites";
import { summaryImages } from "../info/summaryImages";
import { lfp } from "../info/lfp";
import { Project, projects } from "../info/projects";
import { competitions } from "../info/competitions";
import { experiences } from "../info/experiences";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    longDescription: "",
    color: "",
  });

  const handleProjectClick = (item: Project) => {
    setModalOpened(true);
    setProject(item);
  };

  return (
    <>
      <Flex direction="column" gap="lg" align="center">
        <Flex direction="column" align="center">
          <Container
            sx={(theme) => ({
              backgroundColor: theme.colors[`${theme.colorScheme}-theme`][1],
            })}
          >
            <Image
              src="images/personal/gabbie.jpg"
              alt="Gabrielle"
              width={200}
              height={200}
            />
          </Container>
          <Title order={1} ta="center">
            Hi there! I&apos;m Gabrielle Tiu
          </Title>
          <Title order={2} ta="center">
            Artist, Game Developer, Pop Culture Enthusiast
          </Title>
          <Text fz="md" ta="center">
            Here you can learn a little bit more about me, my work and my
            passions.
          </Text>
          <Space h="md" />
          <Flex gap="md" justify="center">
            {websitesList.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.href}
              >
                <ActionIcon>
                  <ThemeIcon
                    size="xl"
                    sx={(theme) => ({
                      backgroundColor: theme.colors[item.color][item.shade],
                    })}
                  >
                    <item.icon />
                  </ThemeIcon>
                </ActionIcon>
              </a>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" align="center" gap="md">
          <Title order={2} ta="center">
            Fun facts about me
          </Title>
          <Flex direction="row" gap="lg" justify="space-evenly" wrap="wrap">
            {summaryImages.map((item) => (
              <Flex direction="column" gap="sm" align="center" key={item.src}>
                <Flex direction="row" gap="sm">
                  <ThemeIcon
                    size="lg"
                    sx={(theme) => ({
                      backgroundColor: theme.colors[item.color][item.shade],
                    })}
                  >
                    <item.icon size={20} />
                  </ThemeIcon>
                  <Text>{item.caption}</Text>
                </Flex>
                <Container
                  sx={(theme) => ({
                    backgroundColor: theme.colors[item.color][item.shade],
                  })}
                >
                  <Image
                    src={`images/personal/${item.src}`}
                    alt={item.alt}
                    width={200}
                    height={200}
                  />
                </Container>
              </Flex>
            ))}
          </Flex>

          <Flex gap="lg" wrap="wrap" justify="center">
            {lfp.map((section, i) => (
              <Flex direction="column" align="center" key={section.caption}>
                <Title order={3}>{section.caption}</Title>
                <Space h="md" />
                <Flex
                  direction="row"
                  gap="md"
                  justify="space-evenly"
                  wrap="wrap"
                >
                  {section.items.map((item) => (
                    <Flex
                      sx={(theme) => ({
                        width: "15rem",
                        height: "fit-content",
                        padding: theme.spacing.md,
                        borderColor:
                          theme.colors[`${theme.colorScheme}-theme`][
                            item.shade
                          ],
                        borderStyle: "solid",
                        borderRadius: theme.radius.sm,
                      })}
                      direction="column"
                      align="center"
                      key={item.level}
                    >
                      {item.level !== "" ? (
                        <>
                          <Title order={4}>{item.level}</Title>
                          <Space h="sm" />
                        </>
                      ) : (
                        ""
                      )}
                      <Flex direction="column" gap="sm" sx={{ width: "100%" }}>
                        {item.subItems.map((subItem, index) => (
                          <Flex key={subItem.name} gap="sm" align="center">
                            <ThemeIcon
                              sx={(theme) => ({
                                width: 50,
                                height: 50,
                                backgroundColor: subItem.color
                                  ? theme.colors[subItem.color][7]
                                  : theme.colors.dark[0],
                              })}
                            >
                              {typeof subItem.icon === "string" ? (
                                <i
                                  className={`devicon-${subItem.icon}-plain devicon-${subItem.icon}-original`}
                                  color="white"
                                  style={{
                                    fontSize: 25,
                                  }}
                                />
                              ) : (
                                subItem.icon
                              )}
                            </ThemeIcon>
                            <Text>{subItem.name}</Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <ProjectGrid
          title="Competitions and Awards"
          items={competitions}
          onItemClick={handleProjectClick}
        />

        <ProjectGrid
          title="Experiences"
          items={experiences}
          onItemClick={handleProjectClick}
        />

        <ProjectGrid
          title="Projects"
          items={projects}
          onItemClick={handleProjectClick}
        />
      </Flex>

      <ProjectModal
        opened={modalOpened}
        project={project}
        onClose={() => setModalOpened(false)}
      />
    </>
  );
}
