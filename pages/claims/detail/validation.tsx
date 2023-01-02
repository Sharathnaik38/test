import { ClaimDetailsLayout } from "./quick-view";

const Validation = () => {
    return (
        <p>Validation works!</p>
    )
}

Validation.getLayout = (page: any) => <ClaimDetailsLayout>{page}</ClaimDetailsLayout>;

export default Validation;
