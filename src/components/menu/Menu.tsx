import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';

import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { changeState } from '../../redux/slice/commonSlice';

import { Link as RouterLink } from 'react-router-dom';

const Menu = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.commonState.sideNaviOpen);

    return (
        <div>
            <React.Fragment key={'left'}>
                <Drawer anchor={'left'} open={state} onClose={() => dispatch(changeState())}>
                    <Box sx={{ width: 250 }} role="presentation" onClick={() => dispatch(changeState())}>
                        <List>
                            <Link color="inherit" underline="none" component={RouterLink} to="/">
                                <ListItem key={'Home'} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Home'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>

                            <Divider />
                            <Link color="inherit" underline="none" component={RouterLink} to="/Page1">
                                <ListItem key={'Page1'} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <MailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Page1'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link color="inherit" underline="none" component={RouterLink} to="/Page2">
                                <ListItem key={'Page2'} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={'Page2'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default Menu;
