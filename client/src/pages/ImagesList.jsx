import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`


class ImagesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllImages().then(images => {
            this.setState({
                images: images.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { images, isLoading } = this.state
        console.log('TCL: ImagesList -> render -> images', images)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            }
        ]

        let showTable = true
        if (!images.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={images}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ImagesList