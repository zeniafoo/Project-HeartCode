import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../modetoggle";

export function NavigationBar() {
    return (
        <NavigationMenu className="flex justify-between min-w-full list-none h-[60px] sticky top-0 fixed">
            <div className="flex gap-4">
            <SignedOut>
            <SignInButton />
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>

            <ModeToggle>
            </ModeToggle>
            </div>


            <div className='flex gap-4'>
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about.me" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            
            </div>
            
        </NavigationMenu>
    )
}