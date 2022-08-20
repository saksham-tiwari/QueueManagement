import React from 'react'
import styles from "../Homepage/Homepage.module.css"
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';

const SearchBar = () => {
  return (
    <form className={styles.topSearch}>
            <div className={styles.one}>
                <input placeholder="Search for Stores, Bus Stops and More....."/>
                <div className={styles.iconInput}>
                <SearchIcon/>
                </div>
            </div>
            <div className={styles.two}>
                <input placeholder="Apply filters..."/>
                <div className={styles.iconInput}>
                <FilterAltIcon/>
                </div>
            </div>
            <div className={styles.three}>
                <input placeholder="Sort By"/>
                <div className={styles.iconInput}>
                <SortIcon/>
                </div>
            </div>
        </form>
  )
}

export default SearchBar