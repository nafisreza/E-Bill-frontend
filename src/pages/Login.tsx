import { FormattedMessage } from "react-intl";
import { Button } from "@/components/ui/button";

import loginIllustration from "@/assets/login-illustration.svg";
import logo from "@/assets/logo.svg";

export default function Login() {
  return (
    <div className="flex flex-col justify-between min-h-fit h-screen py-12 px-[30px]">
      <div className="flex flex-col gap-8 items-center">
        <img src={logo} alt="Bitcredit" className="w-[120px]" />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-sans font-medium text-[24px] tracking-tight mb-0">
            <FormattedMessage
              id="pages.login.title"
              defaultMessage="Bitcoin for the real economy"
              description="Heading copy for Login page"
            />
          </h1>
          <span className="font-normal text-text-200 text-[16px]">
            <FormattedMessage
              id="pages.login.subtitle"
              defaultMessage="A strong trade credit solution, directly between businesses"
              description="Subheading copy for Login page"
            />
          </span>
        </div>
      </div>

      <img
        src={loginIllustration}
        alt="Bitcoin Credit Layer"
        className="aspect-square max-w-[220px] mx-auto"
      />

      <div className="flex flex-col content-between gap-4 text-center">
        <div className="flex flex-col gap-2">
          <Button className="w-full bg-brand-200 text-white font-medium rounded-[8px] py-[24px] px-[32px]">
            <FormattedMessage
              id="pages.login.unlockWithPin"
              defaultMessage="Unlock with PIN"
              description="Go to Unlock page"
            />
          </Button>

          <Button className="w-full bg-text-300 text-white font-medium rounded-[8px] py-[24px] px-[32px]">
            <FormattedMessage
              id="pages.login.newIdentity"
              defaultMessage="New identity"
              description="Start Identity creation flow"
            />
          </Button>
        </div>

        <span className="font-medium text-[#1B0F0080]">
          <FormattedMessage
            id="pages.login.restoreWithSeedPhrase"
            defaultMessage="Restore with seed phrase"
            description="Start restoration process with seed phrase"
          />
        </span>
      </div>
    </div>
  );
}
