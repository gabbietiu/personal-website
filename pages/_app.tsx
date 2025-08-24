import { AppProps } from "next/app";
import Head from "next/head";
import { Flex, MantineProvider } from "@mantine/core";
import "../devicon.min.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Gabrielle Tiu</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          focusRing: "always",
          defaultRadius: "sm",
          radius: {
            xs: 4,
            sm: 16,
            md: 64,
            lg: 128,
            xl: 512,
          },
          fontSizes: {
            xs: 12,
            sm: 16,
            md: 20,
            lg: 32,
            xl: 60,
          },
          spacing: {
            xs: 4,
            sm: 8,
            md: 16,
            lg: 32,
            xl: 64,
          },
          colors: {
            "dark-theme": [
              "#ffffff",
              "#D33737",
              "#EC5D5D",
              "#FF8D8D",
              "#A92C73",
              "#BE4B8C",
              "#D677AD",
              "#222222",
              "#aaaaaa",
              "#dddddd",
            ],
            "light-theme": [
              "#DDDDDD",
              "#730000",
              "#B01B1B",
              "#D33737",
              "#530034",
              "#8D1559",
              "#A92C73",
              "#222222",
              "#555555",
              "#888888",
            ],
          },
          primaryColor: "dark",
          primaryShade: {
            light: 7,
            dark: 3,
          },
          fontFamily: "Ubuntu, Open Sans, Roboto, Arial",
          components: {
            Image: {
              styles: (theme) => ({
                image: {
                  borderRadius: theme.radius.sm,
                },
              }),
            },
            Container: {
              styles: (theme) => ({
                root: {
                  padding: "1rem",
                  margin: "0",
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: theme.radius.sm,
                },
              }),
            },
            ThemeIcon: {
              styles: (theme) => ({
                root: {
                  borderStyle: "solid",
                  borderColor: theme.colors[`${theme.colorScheme}-theme`][9],
                  borderRadius: "100%",
                  borderWidth: theme.spacing.xs,
                },
              }),
            },
            Flex: {
              styles: {
                root: {
                  maxWidth: "fit-content",
                  maxHeight: "fit-content",
                },
              },
            },
            Title: {
              styles: {
                root: {
                  display: "inline",
                },
              },
            },
          },
          headings: {
            fontFamily: "Ubuntu, Open Sans, Roboto, Arial",
            fontWeight: 700,
            sizes: {
              h1: {
                fontSize: 64,
                fontWeight: 700,
              },
              h2: {
                fontSize: 48,
                fontWeight: 700,
              },
              h3: {
                fontSize: 32,
                fontWeight: 600,
              },
              h4: {
                fontSize: 28,
                fontWeight: 500,
              },
            },
          },
        }}
      >
        <Flex
          sx={{
            minWidth: "100%",
            minHeight: "100%",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <Flex
            direction="column"
            justify="center"
            sx={{
              minWidth: "fit-content",
              minHeight: "fit-content",
            }}
          >
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </MantineProvider>
    </>
  );
}
