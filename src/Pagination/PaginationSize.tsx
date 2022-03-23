import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Params } from "react-router-dom";

type Props = {
    totalNumOfArticles: number
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

export default function PaginationSize({ setPageNumber, totalNumOfArticles }: Props) {
    return (
        <Stack spacing={2}>
            <Pagination
                color='standard'

                count={totalNumOfArticles}
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