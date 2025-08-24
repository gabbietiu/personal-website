import {
  Container,
  Flex,
  Grid,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { Project } from "../info/projects";

export type ProjectGridProps = {
  title: string;
  items: Project[];
  onItemClick: (item: Project) => void;
};

export default function ProjectGrid({
  title,
  items,
  onItemClick,
}: ProjectGridProps) {
  return (
    <Flex direction="column" gap="lg" align="center">
      <Title order={2} ta="center">
        {title}
      </Title>
      <Grid justify="center">
        {items.map((item: Project) => (
          <Grid.Col
            sm={6}
            lg={4}
            xl={3}
            sx={{ maxWidth: "fit-content" }}
            key={item.name}
            miw="20rem"
            mih="15rem"
          >
            <UnstyledButton
              onClick={() => onItemClick(item)}
              key={item.name}
              w="100%"
              h="100%"
            >
              <Container
                sx={(theme) => ({
                  borderStyle: "solid",
                  borderColor: theme.colors[item.color][4],
                  backgroundImage: item.media
                    ? `url(images/projects/${item.media[0]})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundBlendMode: "multiply",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  backgroundRepeat: "no-repeat",
                })}
                w="100%"
                h="100%"
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  h="100%"
                  gap="xs"
                >
                  <Title order={4} color="gray.0" ta="center">
                    {item.name}
                  </Title>
                  <Text color="gray.0" ta="center">
                    {item.description}
                  </Text>
                </Flex>
              </Container>
            </UnstyledButton>
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
