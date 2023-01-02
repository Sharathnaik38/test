import { ClaimDetailsLayout } from "./quick-view";

const FNOL = () => {
    return (
        <p>FNOL works!</p>
    )
}

FNOL.getLayout = (page: any) => <ClaimDetailsLayout>{page}</ClaimDetailsLayout>;

export default FNOL;
