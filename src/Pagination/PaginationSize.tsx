import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Params } from "react-router-dom";

type Props = {
    totalNumOfPages: number
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

export default function PaginationSize({ setPageNumber, totalNumOfPages }: Props) {
    return (
        <Stack spacing={2}>
            <Pagination
                color='standard'
                count={totalNumOfPages}
                size="large"
                onClick={(event) => {
                    //@ts-ignore
                    const pageNumber = Number(event.target.textContent)
                    setPageNumber(pageNumber)
                }}
            />
        </Stack>
    );
}