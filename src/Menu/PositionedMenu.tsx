import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Article } from '../Types';
import { useNavigate } from 'react-router-dom';

type Props = {
    article: Article
    deleteArticle: (articleId: number) => void
}
export default function PositionedMenu({ article, deleteArticle }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <i id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} className="far fa-ellipsis-h"></i>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    navigate(`/update-article/${article.id}`)

                }}>
                    Edit
                </MenuItem>
                <MenuItem onClick={() => {
                    handleClose()
                    deleteArticle(article.id)
                }}>Delete</MenuItem>
            </Menu>
        </div>
    );
}
