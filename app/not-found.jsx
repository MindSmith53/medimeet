import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
            <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-8">Page Not Found</h2>
            <p className="text-gray-200 mb-8">
                Oops! The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.
            </p>
            <Link href="/">
                <Button className="h-11 mt-5 animate-bounce">Get Back Home</Button>
            </Link>
        </div>
    );
}