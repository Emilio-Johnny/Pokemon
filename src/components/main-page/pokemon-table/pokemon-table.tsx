export {};
import React from 'react';
// @ts-ignore
import{ useTable } from 'react-table';

const PokemonTable = () => {
    // This is the data for the table
    const data = React.useMemo( () => [
        {
            pokemon: '',
            name: 'pikachu',
            type: 'electric',
            isFavorited: false,
        },
        {
            pokemon: '',
            name: 'squirtle',
            type: 'water',
            isFavorited: false,
        },
        {
            pokemon: '',
            name: 'charmander',
            type: 'fire',
            isFavorited: false,
        },
        {
            pokemon: '',
            name: 'digglet',
            type: 'dirt',
            isFavorited: false,
        },
        {
            pokemon: '',
            name: 'metapod',
            type: 'plant',
            isFavorited: false,
        }
    ], []);
    // This is the structure of the table, It reads from top to bottom and outputs from left to right on HTML page
    const columns = React.useMemo( () => [
        {
            Header: 'Pokemon',
            accessor: 'pokemon',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Type',
            accessor: 'type',
        },
        {
            Header: 'Favorite',
            accessor: 'isFavorited',
        }
    ], []);
    const tableInstance = useTable(
        {
            columns,
            data,
        }
    )
        const {
            getTableProps,
            headerGroups,
            rows,
            prepareRow,
            getTableBodyProps,
        } = tableInstance;

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
            {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell: any) => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: 'papayawhip',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};


export default PokemonTable;