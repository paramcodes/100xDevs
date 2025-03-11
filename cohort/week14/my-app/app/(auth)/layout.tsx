export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>){
    return (
        <div>
            <div className={"border-b p-1"}>
                Sign in now to go 20% off
            </div>
            {children}
        </div>
    )
}