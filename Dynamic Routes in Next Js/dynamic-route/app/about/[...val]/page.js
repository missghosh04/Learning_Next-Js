export default async function Page({ params }) {
    const slug= await params
    console.log(slug)
    return <div>I am about to check console</div>
}