import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import LanguageProvider from "./context/language/LanguageProvider";

import DefaultLayout from "./layouts/Default";
import RequiredInformation from "./pages/signup/RequiredInformation";
import Unlock from "./pages/Unlock";
import Login from "./pages/Login";
import RecoverWithSeedPhrase from "./pages/RecoverWithSeedPhrase";
import Home from "./pages/Home";
import CreateNewIdentity from "./pages/signup/CreateNewIdentity";
import Success from "./pages/signup/Success";
import { Notifications, NotificationsEmpty } from "./pages/Notifications";
import routes from "./constants/routes";

import "./index.css";
import "./styles/fonts.css";
import { Bills, BillsEmpty } from "./pages/Bills";
import EmailVerification from "./pages/signup/EmailVerification";
import OptionalInformation from "./pages/signup/OptionalInformation";
import ConfirmIdentity from "./pages/signup/ConfirmIdentity";
import Bill from "./pages/Bill";
import IssueBill from "./pages/IssueBill";
import CreateBill from "./pages/CreateBill";
import PreviewBill from "./pages/PreviewBill";
import MintBill from "./pages/MintBill";
import SellBill from "./pages/SellBill";

import Onboarding from "./pages/onboarding/Onboarding";

const router = createBrowserRouter(
  [
    {
      path: routes.UNLOCK,
      element: <Unlock />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: routes.LOGIN,
      element: <Login />,
    },
    {
      path: routes.HOME,
      element: <Home />,
    },
    {
      path: routes.RESTORE_WITH_SEED_PHRASE,
      element: <RecoverWithSeedPhrase />,
    },
    {
      path: routes.CREATE_IDENTITY,
      element: <CreateNewIdentity />,
    },
    {
      path: routes.REQUIRED_INFORMATION,
      element: <RequiredInformation />,
    },
    {
      path: routes.EMAIL_VERIFICATION,
      element: <EmailVerification />,
    },
    {
      path: routes.OPTIONAL_INFORMATION,
      element: <OptionalInformation />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/confirm-identity",
      element: <ConfirmIdentity />,
    },
    {
      path: routes.NOTIFICATIONS,
      element: <Notifications />,
    },
    {
      path: "/notifications-empty",
      element: <NotificationsEmpty />,
    },
    {
      path: routes.BILLS,
      element: <Bills />,
    },
    {
      path: "/bills-empty",
      element: <BillsEmpty />,
    },
    {
      path: routes.VIEW_BILL,
      element: <Bill />,
    },
    {
      path: routes.ISSUE_BILL,
      element: <IssueBill />,
    },
    {
      path: routes.CREATE_BILL,
      element: <CreateBill />,
    },
    {
      path: routes.PREVIEW_BILL,
      element: <PreviewBill />,
    },
    {
      path: routes.MINT_BILL,
      element: <MintBill />,
    },
    {
      path: routes.SELL_BILL,
      element: <SellBill />,
    },
    {
      path: routes.CREATE_BILL,
      element: <CreateBill />,
    },
    {
      path: routes.PREVIEW_BILL,
      element: <PreviewBill />,
    },
    {
      path: "/get-started",
      element: <Onboarding />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

if (import.meta.env.DEV) {
  console.info("[dev] quickly navigate through all routes while developing:");
  console.table(
    router.routes
      .filter((it) => it.path !== undefined)
      .map((it) => [it.path, location.origin + (it.path || "")])
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <DefaultLayout>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
        <Toaster />
      </DefaultLayout>
    </LanguageProvider>
  </StrictMode>
);
