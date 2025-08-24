import {
  ActionIcon,
  Badge,
  CloseButton,
  Flex,
  Image,
  Modal,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
  Group,
  Button,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconPresentationAnalytics,
  IconWorld,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons";
import { toolColorMapping } from "../utils/toolColorMapping";
import { Project } from "../info/projects";
import { useState, useRef, useEffect } from "react";

export type ProjectModalProps = {
  opened: boolean;
  onClose: () => void;
  project: Project;
};

export default function ProjectModal(props: ProjectModalProps) {
  const themeProvider = useMantineTheme();
  const { opened, project, onClose } = props;
  const {
    name,
    longDescription,
    media,
    color,
    github,
    youtube,
    deck,
    website,
    tools,
    teammates,
    awards,
  } = project;

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset media index when modal opens
  useEffect(() => {
    if (opened) {
      setCurrentMediaIndex(0);
    }
  }, [opened]);

  const nextMedia = () => {
    if (media && currentMediaIndex < media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const previousMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const isVideo = (filename: string) => {
    const videoExtensions = [".mp4", ".mov"];
    return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
  };

  const currentMedia = media?.[currentMediaIndex];

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      transition="slide-down"
      transitionDuration={300}
      exitTransitionDuration={300}
      transitionTimingFunction="ease"
      size="lg"
      withCloseButton={false}
      overlayColor={
        themeProvider.colors[color]
          ? themeProvider.colors[color][2]
          : themeProvider.colors.gray[2]
      }
    >
      <Flex direction="column" gap="sm">
        <Flex gap="sm" justify="space-between" align="center">
          <Title order={3}>{name}</Title>
          <CloseButton onClick={onClose} />
        </Flex>
        {media && media.length > 0 && (
          <Flex direction="column" gap="xs" align="center">
            {currentMedia &&
              (isVideo(currentMedia) ? (
                <video
                  ref={videoRef}
                  src={`images/projects/${currentMedia}`}
                  controls
                  style={{ maxWidth: "100%", maxHeight: "500px" }}
                  onEnded={() => {
                    if (currentMediaIndex < media.length - 1) {
                      nextMedia();
                    }
                  }}
                />
              ) : (
                <Image
                  src={`images/projects/${currentMedia}`}
                  alt={`${name} - Media ${currentMediaIndex + 1}`}
                />
              ))}
            {media.length > 1 && (
              <Group position="center" spacing="xs">
                <Button
                  variant="subtle"
                  onClick={previousMedia}
                  disabled={currentMediaIndex === 0}
                >
                  <IconChevronLeft size={20} />
                </Button>
                <Text size="sm">
                  {currentMediaIndex + 1} / {media.length}
                </Text>
                <Button
                  variant="subtle"
                  onClick={nextMedia}
                  disabled={currentMediaIndex === media.length - 1}
                >
                  <IconChevronRight size={20} />
                </Button>
              </Group>
            )}
          </Flex>
        )}
        <Text size="md">{longDescription}</Text>
        <Flex gap="sm" align="center" wrap="wrap">
          {tools && (
            <>
              <Text size="sm">Languages & Frameworks:</Text>
              {tools.map((tool) => (
                <ThemeIcon
                  key={tool}
                  sx={(theme) => ({
                    width: 30,
                    height: 30,
                    backgroundColor: theme.colors[toolColorMapping[tool]][7],
                  })}
                >
                  <i
                    className={`devicon-${tool}-plain devicon-${tool}-original`}
                    color="white"
                    style={{
                      fontSize: 15,
                    }}
                  />
                </ThemeIcon>
              ))}
            </>
          )}
        </Flex>
        {teammates && (
          <Flex gap="sm" align="center" wrap="wrap">
            <Text size="sm">Teammates:</Text>
            {teammates.map((person) => (
              <a
                key={person.name}
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ lineHeight: 0 }}
              >
                <Badge color={`${color}.5`} variant="filled">
                  {person.name}
                </Badge>
              </a>
            ))}
          </Flex>
        )}
        {awards && (
          <Flex gap="sm" align="center" wrap="wrap">
            <Text size="sm">Awards:</Text>
            {awards.map((award) => (
              <Badge key={award} color="yellow.6" variant="filled">
                {award}
              </Badge>
            ))}
          </Flex>
        )}
        <Flex gap="sm" align="center">
          {(github || youtube || deck || website) && (
            <Text size="sm">Links:</Text>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors.dark[9] }}
                  size="lg"
                >
                  <IconBrandGithub size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors.red[7] }}
                  size="lg"
                >
                  <IconBrandYoutube size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
          {deck && (
            <a href={deck} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors.yellow[7] }}
                  size="lg"
                >
                  <IconPresentationAnalytics size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors[`${color}`][7] }}
                  size="lg"
                >
                  <IconWorld size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
        </Flex>
      </Flex>
    </Modal>
  );
}
