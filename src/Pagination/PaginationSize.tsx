import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationSize() {
    return (
        <Stack spacing={2}>
            <Pagination
                color='standard'

                count={10}
                size="large"
                onClick={(event) => {
                    //@ts-ignore
                    console.log(event.target.textContent);
                }}
            />
        </Stack>
    );
}