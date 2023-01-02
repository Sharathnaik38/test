import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { Box, Button, Divider, Icon } from '@mui/material';
import Link from 'next/link';

export const ClaimDetailsLayout = ({ children }: any) => {
    const breadcrumbs = [
        <Link key={'1'} href="/claims">
          Claims
        </Link>,
        <Link key={'2'} href="/claims/detail">
            John Doe
        </Link>
    ];

    return (
        <div>
            <Stack className="mb-5" spacing={2}>
                <Breadcrumbs
                    separator={<Icon>navigate_next</Icon>}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <div className="grid gap-4 grid-cols-12">
                <div className="col-span-2">
                    <Box className='p-2 rounded'
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#fff',
                            boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)'
                        }}
                    >
                        <Link className="no-underline" href="/claims/detail/quick-view">
                            <Button 
                                className="text-xs text-slate-700 font-bold w-full px-1 py-2 normal-case"
                                sx={{
                                    boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#e5e5e5',
                                        boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)'
                                    },
                                }}
                                variant="contained">
                                <span className="flex items-center"><Icon>battery_charging_full</Icon>Quick View</span>
                            </Button>
                        </Link>
                        <Divider className="my-5" />
                        <Link className="no-underline" href="/claims/detail/fnol">
                            <Button 
                                className="text-xs text-slate-700 font-bold w-full px-1 py-2 normal-case"
                                sx={{
                                    boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#e5e5e5',
                                        boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)'
                                    },
                                }}
                                variant="contained">
                                <span className="flex items-center">FNOL</span>
                            </Button>
                        </Link>
                        <Link className="no-underline" href="/claims/detail/validation">
                            <Button 
                                className="text-left text-xs text-slate-700 font-bold w-full mt-2 px-1 py-2 normal-case"
                                sx={{
                                    boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#e5e5e5',
                                        boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)'
                                    },
                                }}
                                variant="contained">
                                <span className="flex items-center">Validation</span>
                            </Button>
                        </Link>
                    </Box>
                </div>
                <div className="col-span-10">
                    {children}
                </div>
            </div>
        </div>
    );
}

const QuickView = () => {
    return (
        <p>This is quick-view details</p>
    )
}

QuickView.getLayout = (page: any) => <ClaimDetailsLayout>{page}</ClaimDetailsLayout>;

export default QuickView;
