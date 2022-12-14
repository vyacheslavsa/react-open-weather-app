import React from 'react';
import styles from '../Content/Content.module.scss'
import stylesSkeleton from './SkeletonContent.module.scss'
import LoadingContainer from "../LoadingContainer";
import cs from "classnames";
import {useMediaQuery} from "react-responsive";


const SkeletonContent = () => {
    const isTablet = useMediaQuery({query: '(max-width: 767px)'})
    const isMobile = useMediaQuery({query: '(max-width: 575px)'})

    return (
        <div className={styles.weatherPanel}>
            <div className={styles.currentWeather}>
                <div className={cs(styles.leftInfo, stylesSkeleton.topInfo)}>
                    <LoadingContainer width={'250px'} margin={'0 0 5px 0'} height={'35px'}/>
                    <LoadingContainer width={'200px'} margin={'0 0 5px 0'} height={'35px'}/>
                    <LoadingContainer width={'200px'} height={'35px'}/>
                </div>
                <LoadingContainer width={isMobile ? '100px' : '150px'} height={isMobile ? '70px' : '100px'}
                                  margin={isMobile && '5px 0 0 0'}/>
            </div>
            <div className={styles.hourly}>
                <LoadingContainer width={'150px'} height={'20px'}/>
                <div className={styles.iconHourse}>
                    {[...new Array(10).keys()].map((_, index) => (
                        <LoadingContainer key={index} width={'32px'} height={'32px'} borderRadius={'10px'}/>
                    ))}
                </div>
                <div className={styles.dayWeather}>
                    <div className={styles.times}>
                        {[...new Array(10).keys()]
                            .map((_, index) =>
                                <LoadingContainer key={index} width={'60px'} height={'30px'}/>
                            )}
                    </div>
                </div>
            </div>
            <div className={styles.week}>
                <div className={styles.leftInfoWeek}>
                    {
                        !isTablet ?
                            <>
                                <div className={styles.day}>
                                    <LoadingContainer width={'100px'} height={'140px'}/>
                                </div>
                                <div className={styles.numMouth}>
                                    <LoadingContainer width={'100px'} height={'140px'}/>
                                </div>
                                <div className={styles.dayTemp}>
                                    <LoadingContainer width={'90px'} height={'140px'}/>
                                </div>
                            </>
                            :
                            <LoadingContainer width={'100%'} height={'140px'}/>
                    }
                </div>
                <div className={styles.rightInfoWeek}>
                    <div className={styles.moreInformation}>
                        <LoadingContainer width={'150px'} height={'20px'}/>
                        <LoadingContainer width={'150px'} height={'20px'}/>
                        <LoadingContainer width={'300px'} height={'20px'}/>
                        <LoadingContainer width={'300px'} height={'20px'}/>
                        <LoadingContainer width={'300px'} height={'20px'}/>
                    </div>
                </div>
            </div>
            <div className={styles.lastContent}>
                <div className={cs(styles.rightInfoWeek, styles.isMobileInfoWeek)}>
                    <div className={styles.moreInformation}>
                        <LoadingContainer width={isMobile ? '50%' : '150px'} height={'20px'} margin={'0 0 5px 0'}/>
                        <LoadingContainer width={isMobile ? '50%' : '150px'} height={'20px'} margin={'0 0 5px 0'}/>
                        <LoadingContainer width={isMobile ? '50%' : '150px'} height={'20px'} margin={'0 0 5px 0'}/>
                        <LoadingContainer width={isMobile ? '80%' : '300px'} height={'20px'} margin={'0 0 5px 0'}/>
                        <LoadingContainer width={isMobile ? '80%' : '300px'} height={'20px'} margin={'0 0 5px 0'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonContent;