import Link from 'next/link';


// fetch a paginated records list
async function getAreaCodes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/area_codes/records")
    const data = await res.json();
    return data?.items;
}

//component
export default async function AreaCodePage() {
    const areaCodes = await getAreaCodes();
    return(
        <>
            <h1>Area Codes</h1>
            <div>
                {areaCodes?.map((code) => {
                    return <Code key={areaCodes.id} code={code}/>
                })}
            </div>
        </>
    )
}

function Code({code}){
    const {id, state, content, created} = code || {};

    return(
        <>
            <Link href={`/codes/${id}`}>
                <div>
                    <h2>{state}</h2>
                    <h5>{content}</h5>
                    <p>{created}</p>
                </div>
            </Link>
        </>
    )
}