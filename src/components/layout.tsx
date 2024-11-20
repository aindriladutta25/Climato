import type { PropsWithChildren } from "react";

const Layout = ({children}: PropsWithChildren) => {
    return(
        <div className="bg-gradient-to-br from-background to-muted">
            header 
            <main className="min-h-screen container mx-auto px-4 py-8">{children}</main>
            <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto text-center px-4 py-12 text-gray-400 ">
                    <p>
                         Developed by Aindrila Dutta
                    </p>
                </div>
            </footer>
        </div>
    )
}
export default Layout;