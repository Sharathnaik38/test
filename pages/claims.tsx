import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const claims = [
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left success',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left danger',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left danger',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left success',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left success',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left success',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    },
    {
        no: 'ABC12345678',
        status: 'Assessment',
        type: {
            type: 'property',
            sub: 'Fire Damage'
        },
        amount: 26000,
        class: 'thick-border-left danger',
        claimant: [{
            name: 'John Doe',
            company: 'LMN Company'
        }],
        insurer: [
            {
                name: 'Jenny',
                company: 'Allianz'
            }
        ]
    }
]

export default function Claims() {
    return (
        <div>
            <p className="mb-5 text-blue-800">Claims</p>
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
                        <div className='flex justify-between'>
                            <h5 style={{ color: '#35425C', fontWeight: 700 }}>Filter</h5>
                            <Button className='text-[9px] text-slate-500 p-1 normal-case' variant="contained" disabled>
                                Clear Filter
                            </Button>
                        </div>
                        <Button 
                            className="text-xs text-slate-700 font-bold w-full mt-5 px-1 py-2 normal-case"
                            sx={{
                                boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)',
                                backgroundColor: 'transparent',
                                '&:hover': {
                                    backgroundColor: '#e5e5e5',
                                    boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)'
                                },
                            }}
                            variant="contained">
                            <span className="flex items-center"><Icon>#</Icon>Claim Number</span>
                        </Button>
                        <Button 
                            className="text-xs text-slate-700 font-bold w-full mt-5 px-1 py-2 normal-case"
                            sx={{
                                boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)',
                                backgroundColor: 'transparent',
                                '&:hover': {
                                    backgroundColor: '#e5e5e5',
                                    boxShadow: '2px 2px 10px 1px rgba(82, 77, 170, 0.15)'
                                },
                            }}
                            variant="contained">
                            <span className="flex items-center"><Icon>wallet</Icon>Claim Amount</span>
                        </Button>
                    </Box>
                </div>
                <div className="col-span-10">
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <div className="flex justify-between">
                            <div className='flex'>
                                <IconButton aria-label="grid-view">
                                    <Icon className="icon active">grid_view</Icon>
                                </IconButton>
                                <IconButton aria-label="list-view">
                                    <Icon className="icon">list</Icon>
                                </IconButton>
                                <Button
                                    className="text-white text-sm normal-case"
                                    color="primary"
                                    variant="contained">
                                    <Icon className="text-white">sort</Icon> Sort
                                </Button>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-slate-700 text-sm'>12/300 Claims</p>
                                <Button
                                    className="text-white ml-3 text-sm normal-case"
                                    color="primary"
                                    variant="contained">
                                    <Icon className="text-white">add</Icon> Claim
                                </Button>
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-12 mt-5">
                            {claims && claims.map((claim, index) => (
                                <div key={index} className="col-span-3">
                                    <Card className={`card ${claim.class}`}>
                                        <CardContent className='p-3'>
                                            <div className='flex justify-between mb-2'>
                                                <div className='flex flex-col'>
                                                    <p className='text-slate-400 text-[10px]'>CAL Claim Number</p>
                                                    <p className='font-bold text-xs'>{claim.no}</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='text-slate-400 text-[10px]'>Claim Status</p>
                                                    <p className='font-bold text-xs'>{claim.status}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between mb-2'>
                                                <div className='flex flex-col'>
                                                    <p className='text-slate-400 text-[10px]'>Claim Type</p>
                                                    <p className='text-xs'>{claim.type.type}</p>
                                                    <p className='text-slate-400 text-[10px]'>{claim.type.sub}</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='text-slate-400 text-[10px]'>Claim Amount</p>
                                                    <p className='text-xs'>{claim.amount} AUD</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between'>
                                                <div className='flex flex-col'>
                                                    <p className='text-slate-400 text-[10px]'>Claimant</p>
                                                    <p className='text-xs'>{claim.claimant[0].name}</p>
                                                    <p className='text-slate-400 text-[10px]'>{claim.claimant[0].company}</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='text-slate-400 text-[10px]'>Insurer</p>
                                                    <p className='text-xs'>{claim.insurer[0].name}</p>
                                                    <p className='text-slate-400 text-[10px]'>{claim.insurer[0].company}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                ))
                            }
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}
