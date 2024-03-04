import { Dialog } from "@/components/dialog";
import { use, useId, useRef, useState } from "react";
import { useStrictMemo } from "stack-shared/src/hooks/use-strict-memo";
import { useAdminApp } from "./useAdminInterface";
import { Box, Stack, Typography } from "@mui/joy";
import { Paragraph } from "@/components/paragraph";
import Link from "next/link";

export function OnboardingDialog() {
  const called = useRef(false);
  const formId = useId();
  const stackAdminApp = useAdminApp();
  const [open, setOpen] = useState(true);

  const dataPromis = useStrictMemo(async () => {
    if (called.current) {
      return;
    }
    called.current = true;

    const apiKeySets = await stackAdminApp.listApiKeySets();
    if (apiKeySets.length > 0) {
      return;
    }

    setOpen(true);

    return await Promise.all([
      stackAdminApp.createApiKeySet({
        hasPublishableClientKey: true,
        hasSecretServerKey: true,
        hasSuperSecretAdminKey: false,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 200), // 200 years, effectively never
        description: 'Onboarding'
      }),
      stackAdminApp.getProject()
    ]);
  }, []);
  const data = use(dataPromis);
  console.log(data);
  if (!data) {
    return null;
  }

  const [apiKey, project] = data;

  return (
    <Dialog
      titleIcon="library_add"
      title="Create new project"
      cancelButton
      okButton={{
        label: "Continue",
        onClick: async () => setOpen(false),
        props: {
          type: "submit",
          form: formId,
        },
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      {/* TODO: Add document link */}
      <Stack spacing={1}>
        <Paragraph body>
          Here are your new API keys. Please copy this to your .env.local file. Detailed instruction can be founder <Link href="/docs/getting-started">here</Link>. 
        </Paragraph>
        <Box p={2} bgcolor="background.paper" borderRadius={4} overflow='auto'>
          <Typography>
            NEXT_PUBLIC_STACK_PROJECT_ID={project.id}
          </Typography>
          <Typography>
            NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY={apiKey.publishableClientKey}
          </Typography>
          <Typography>
            STACK_SECRET_SERVER_KEY={apiKey.secretServerKey}
          </Typography>
        </Box>
        <Paragraph body>
          Note that the secret server key is only shown once. You need to generate a new one if you lose it.
        </Paragraph>
      </Stack>
    </Dialog>
  );
}