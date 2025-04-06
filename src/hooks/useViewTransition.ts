// import { slideDownTransition } from "@/lib/view-transitions";
// import { slideUpTransition } from "@/lib/view-transitions";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export const useViewTransition = () => {
  const path = usePathname();
  const router = useTransitionRouter();
  // const nextRouter = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // const isAboutPage = path === "/";
    // const goingToAboutPage = href === "/";

    // if (isAboutPage && !goingToAboutPage) {
    //   router.push(href, {
    //     onTransitionReady: slideUpTransition,
    //   });
    // } else if (!isAboutPage && goingToAboutPage) {
    //   router.push(href, {
    //     onTransitionReady: slideDownTransition,
    //   });
    // } else {
    //   nextRouter.push(href);
    // }
    router.push(href);
  };

  return { path, handleNavigation };
};
