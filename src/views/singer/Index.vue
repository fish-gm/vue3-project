<!-- 歌手详情 -->
<template>
    <div class='Main_Detail'>
        <div class="Details">
            <div class="Details_Left">
                <div class="Details_content">
                    <div class="Deatils_nav">
                        <span class="first">{{ SongsTopNav.name }}</span>
                        <span class="second">{{ SongNameF }} {{ SongNameS }}</span>
                    </div>

                    <div class="Details_img">
                        <img :src="SongsTopNav.img1v1Url" alt="">
                    </div>
                    <div>
                        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="border-card">
                            <el-tab-pane label="热门作品" name="first">
                                <div class="hotwork">
                                    <div class="hotwork_nav">
                                        <div class="nav_left">
                                            <!-- 播放按钮 -->
                                            <div class="hotplay">
                                                <img src="../../assets/img/icon_paly.png" alt="">
                                                <span>播放</span>
                                            </div>
                                            <div class="collect">
                                                <img src="../../assets/img/collect_icon.png" alt="">
                                                <span>收藏热门50</span>
                                            </div>
                                        </div>
                                        <div class="nav_right">
                                            <div class="right_song">
                                                <span>热门单曲</span>
                                                <i></i>
                                            </div>
                                            <div class="right_list">
                                                <div class="SongClassification">
                                                    热门单曲
                                                </div>
                                                <div class="SongClassification">
                                                    作词作品
                                                </div>
                                                <div class="SongClassification">
                                                    作曲作品
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <el-table :data="SongsList" stripe style="width: 100%" ref="singleTableRef"
                                            highlight-current-row @current-change="handleCurrentChange">
                                            <el-table-column type="index" width="50" />
                                            <el-table-column prop="name" width="300" />
                                            <el-table-column width="80">
                                                <template #default="scope">
                                                    <div>{{ formatime(SongsList[scope.$index].dt) }}</div>
                                                </template>
                                            </el-table-column>

                                            <el-table-column prop="al.name" />
                                        </el-table>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="所有专辑" name="second">
                                <!-- 宫格图片主容器 -->
                                <div class="content_grid" v-infinite-scroll="load">
                                    <div class="content_grid_detail" v-for="(item, index) in AlbumList" @click="getAlbmid(index)">
                                        <div class="content_grid_img">
                                            <img :src="item.blurPicUrl" alt="">
                                        </div>
                                        <div class="content">
                                            <span class="first">{{ item.name }}</span>
                                            <span class="second">{{
                                                formattedDate(item.publishTime) }}</span>
                                        </div>
                                        <!-- 显示播放 -->
                                        <div class="showPlay"></div>
                                    </div>

                                </div>

                            </el-tab-pane>
                            <el-tab-pane label="相关MV" name="third">
                                <div class="MV_box">
                                    <div class="MV_img" v-for="(item, index) in MV" @click="getMV(index)">
                                        <img :src="item.imgurl" alt="">
                                        <span>{{ item.name }}</span>
                                        <div class="PlayMV">
                                            <img src="../../assets/img/playcircle1.png" alt="">
                                        </div>
                                        <div class="PlayMVs">
                                            <img src="../../assets/img/playcircle2.png" alt="">
                                        </div>
                                    </div>

                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="艺人介绍" name="fourth">
                                <div class="txet_title">
                                    <div class="introduction">
                                        <span class="introduction_first">{{ SongsTopNav.name }}简介</span>
                                        <span class="introduction_second">{{ Experience }}</span>
                                    </div>
                                    <div class="introduction" v-for="(item, index) in ExperienceList">
                                        <span class="introduction_third">{{ item.ti }}</span>
                                        <span class="introduction_second">{{ item.txt }}</span>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
            <div class="Details_Right">
                <div class="sameSinger">
                    <div class="nav">
                        <span>相似歌手</span>
                    </div>
                    <div class="img_box">
                        <div class="Sameimg">
                            <img src="	https://p1.music.126.net/jj_Ke8S0q8lpDtohy9seDw==/109951168719781607.jpg?param=50y50"
                                alt="">
                            <span>薛之谦</span>
                        </div>
                        <div class="Sameimg">
                            <img src="http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg?param=50y50"
                                alt="">
                            <span>G.E.M.邓紫棋</span>
                        </div>
                        <div class="Sameimg">
                            <img src="http://p1.music.126.net/MST3f1Uv77SwFyTf0Gcj5w==/109951168324499292.jpg?param=50y50"
                                alt="">
                            <span>李荣浩</span>
                        </div>
                        <div class="Sameimg">
                            <img src="http://p1.music.126.net/36WeG5-ykSvhlzujVMtWyw==/109951166229071726.jpg?param=50y50"
                                alt="">
                            <span>蔡雅健</span>
                        </div>
                        <div class="Sameimg">
                            <img src="http://p1.music.126.net/FRmMNIYCEBkzd0KcSvFW3Q==/109951165907833550.jpg?param=50y50"
                                alt="">
                            <span>王二浪</span>
                        </div>
                        <div class="Sameimg">
                            <img src="http://p1.music.126.net/7uBClWo-0s4QFusH3q4HAg==/109951165912271974.jpg?param=50y50"
                                alt="">
                            <span>郭顶</span>
                        </div>
                    </div>
                    <div class="nav">
                        <span>音遇多端下载</span>
                    </div>
                    <div class="download">
                        <div class="downiphone">
                            <div class="one">
                                <img src="../../assets/img/iPhoneCopy.png" alt="">
                            </div>
                            <div class="two">
                                <img src="../../assets/img/iPhoneactive.png" alt="">
                            </div>
                        </div>
                        <div class="downpc">
                            <div class="one">
                                <img src="../../assets/img/pc.png" alt="">
                            </div>
                            <div class="two">
                                <img src="../../assets/img/pcactive.png" alt="">
                            </div>
                        </div>
                        <div class="downarphone">
                            <div class="one">
                                <img src="../../assets/img/anz.png" alt="">
                            </div>
                            <div class="two">
                                <img src="../../assets/img/anzactive.png" alt="">
                            </div>
                        </div>
                    </div>
                    <span class="songer">同步歌单，随时畅听320k好音乐</span>
                    <div class="nav">
                        <span>用户wiki</span>
                    </div>
                    <div class="last">
                        <i></i>
                        <span>补充或修改艺人资料</span>
                    </div>
                    <div class="last">
                        <i></i>
                        <span>用户wiki任务中心</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { ElTable } from 'element-plus'
import { api } from "../../apis/api"
import type { TabsPaneContext } from 'element-plus'
import { useRouter } from "vue-router";
export default defineComponent({
    setup() {
        //修改Element样式（穿透不了）
        onMounted(() => {
            document.body.style.setProperty('--el-color-primary', '#c20c0c');
        })
        //时间戳转化
        const formattedDate = (value: any) => {
            const date = new Date(value);
            return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
        };
        //获取专辑详情
        let AlbumList: any = ref<Array<any>>([])
        //获取MV详情
        let MV: any = ref<Array<any>>([])
        //默认数字
        let limit = ref(20)
        const activeName = ref('first')
        //歌手经历
        let ExperienceList = ref<Array<any>>([])
        let Experience = ref('')
        //Elememt组件
        const handleClick = (tab: TabsPaneContext, event: Event) => {
            if (tab.index == '1') {
                limit.value = 20
                //获取专辑详情
                api.getAlbumDetails({
                    id: id.value,
                    limit: limit.value
                }).then((res): any => {
                    AlbumList.value = res.data.hotAlbums
                }).catch((err) => {
                    console.log(err);
                })
            }
            if (tab.index == '2') {
                limit.value = 20
                //获取MV详情
                api.getMVDeatils({
                    id: id.value,
                    limit: limit.value
                }).then((res): any => {
                    MV.value = res.data.mvs
                    // console.log('===>',MV.value);
                }).catch((err) => {
                    console.log(err);
                })
            }
            if (tab.index == '3') {
                api.getAlbumExperience({
                    id: id.value,
                }).then((res): any => {
                    ExperienceList.value = res.data.introduction
                    Experience.value = res.data.briefDesc
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
        //列表渲染
        const currentRow = ref()
        const singleTableRef = ref<InstanceType<typeof ElTable>>()
        //歌曲列表点击
        const handleCurrentChange = (val: any) => {
            currentRow.value = val
            //输出歌曲id
            console.log('输出歌曲id===>',currentRow.value.id);
            
        }
        //专辑列表点击
        const getAlbmid = (index:number):void=>{
            AlbumList.value[index].id
            console.log('专辑列表点击id====>',AlbumList.value[index].id);
        }
        //MV列表点击
        const getMV = (index:number):void=>{
            MV.value[index].id
            console.log('专辑列表点击id====>',MV.value[index].id);
        }
        //歌曲列表
        let SongsList: any = ref<Array<any>>([])
        //标题数据img
        let SongsTopNav: any = ref<Array<any>>([])
        //副标题    
        let SongNameF: any = ref('')
        let SongNameS: any = ref('')
        //获取路由传参
        const router = useRouter();
        let id: any = ref('')
        //获取歌手详情
        onMounted(() => {
            id.value = router.currentRoute.value.query.id
            // console.log(id.value);
            api.getSingerDetails({
                id: id.value
            }).then((res): any => {
                SongsList.value = res.data.hotSongs
                console.log(SongsList.value);

                SongsTopNav.value = res.data.artist
                SongNameF.value = res.data.artist.alias[0]
                SongNameS.value = res.data.artist.alias[1]
            }).catch((err) => {
                console.log(err);
            })
        })
        //数据计算===>相当于filter
        const formatime = (value: any) => {
            value = value / 1000
            let m = Math.floor(value % 3600 / 60)
            let s = Math.floor(value % 60)
            let m1 = m < 10 ? '0' + m : m;
            let s1 = s < 10 ? '0' + s : s;
            return `${m1}:${s1} `;
        }
        const handleDelete = (index: number, row: any) => {
            console.log(index, row)
        }
        //专辑触底加载更多
        let load = () => {
            let limittotal = computed(() => {
                if (limit.value < 68) {
                    limit.value += 12
                }
                return limit.value
            })
            //获取专辑详情
            api.getAlbumDetails({
                id: 3684,
                limit: limittotal.value   //默认40
            }).then((res): any => {
                AlbumList.value = res.data.hotAlbums
            }).catch((err) => {
                console.log(err);
            })
            //获取MV详情
            api.getMVDeatils({
                id: 3684,
                limit: limit.value
            }).then((res): any => {
                MV.value = res.data.mvs
            }).catch((err) => {
                console.log(err);
            })

        }
        return {
            //自己所需数据
            // AlbumIndex,
            activeName,
            singleTableRef,
            currentRow,
            SongsList,
            SongsTopNav,
            SongNameF,
            SongNameS,
            AlbumList,
            MV,
            ExperienceList,
            Experience,
            formattedDate,
            getAlbmid,
            load,
            formatime,
            handleCurrentChange,
            handleClick,
            handleDelete,
            getMV,
        }
    }
})
</script>
<style lang='less' scoped>
:deep(<inner-selector>) .el-tabs__nav-scroll {
    background-color: #f8f8f8;
}

:deep(<inner-selector>) .el-tabs__item {
    padding: 0 40px;
}

:deep(<inner-selector>) .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child {
    padding-right: 40px;
}

:deep(<inner-selector>) .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2) {
    padding-left: 40px;
}

:deep(<inner-selector>) .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #c20c0c;
}

:deep(<inner-selector>) .el-tabs--border-card>.el-tabs__header {
    &:hover {
        color: #c20c0c;
    }
}

:deep(<inner-selector>) .el-table .el-table__cell {
    padding: 0;
    cursor: pointer;
}

:deep(<inner-selector>) .el-table .cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.Main_Detail {
    width: 100%;
    background-color: #f5f5f5;

    .Details {
        width: 980px;

        margin: 0 auto;
        display: flex;

        .Details_Left {
            width: 72%;

            background-color: #ffffff;

            .Details_content {
                margin: 0 auto;
                width: 92%;


                .Deatils_nav {
                    margin-top: 35px;

                    .first {
                        display: inline-block;
                        font-size: 24px;
                        margin-bottom: 10px;
                        ;
                        margin-right: 5px;
                    }
                }

                .content_grid {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .content_grid_detail {
                        cursor: pointer;
                        width: 23%;
                        height: 200px;
                        margin-bottom: 5px;
                        position: relative;

                        &:hover .showPlay {
                            display: block;
                        }

                        .content_grid_img {
                            text-align: center;
                            width: 100%;
                            height: 140px;
                            background-image: url(../../assets/img/disc.png);
                            background-size: cover;

                            img {
                                width: 120px;
                                height: 120px;
                                margin-top: 10px;
                            }
                        }

                        .content {
                            text-align: left;
                            margin-left: 5px;

                            span {
                                display: block;
                                padding: 5px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }

                            .first {
                                font-size: 16px;
                            }

                            .second {
                                font-size: 14px;
                            }

                        }

                        .showPlay {
                            position: absolute;
                            display: none;
                            bottom: 75px;
                            right: 18px;
                            width: 28px;
                            height: 28px;
                            background-image: url(../../assets/img/songPlay.png);
                            background-size: cover;
                        }
                    }
                }

                .Details_img {
                    width: 100%;
                    height: 300px;
                    position: relative;
                    /* 为了在容器中垂直居中图片 */
                    overflow: hidden;

                    /* 隐藏溢出的部分 */
                    img {
                        width: 100%;
                        height: 100%;
                        /* 图片高度为容器高度的一半 */
                        object-fit: cover;
                        /* 图片自适应容器，可能会裁剪部分图片 */
                        object-position: center center;
                        /* 控制图片的垂直对齐方式，这里是居中顶部对齐 */
                    }
                }

                .MV_box {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .MV_img {
                        width: 23%;
                        height: 200px;
                        position: relative;
                        cursor: pointer;

                        &:hover .PlayMV {
                            display: none;
                        }

                        &:hover .PlayMVs {
                            display: block;
                        }

                        .PlayMV {
                            display: block;
                            position: absolute;
                            top: 50px;
                            right: 50px;

                            img {
                                width: 44px;
                                height: 44px;
                            }
                        }

                        .PlayMVs {
                            display: none;
                            position: absolute;
                            top: 50px;
                            right: 50px;

                            img {
                                width: 44px;
                                height: 44px;
                            }
                        }

                        img {
                            width: 100%;
                            height: 140px;
                        }

                        span {
                            display: block;
                            height: 30px;
                            line-height: 30px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            /* 可选，用于在文本溢出时显示省略号（...） */
                        }

                    }
                }

                .demo-tabs>.el-tabs__content {
                    padding: 32px;
                    font-size: 32px;
                    font-weight: 600;
                }

                .hotwork {
                    width: 100%;

                    .hotwork_nav {
                        width: 100%;
                        height: 50px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .nav_left {
                            margin-left: 20px;
                            display: flex;

                            >div {
                                height: 30px;
                                font-size: 14px;
                                display: flex;
                                align-items: center;
                                border-radius: 5px;
                                cursor: pointer;
                            }

                            .hotplay {
                                width: 80px;
                                background: linear-gradient(to bottom, #4291da, #1d6ebe);
                                border: 1px solid #1d6ebe;


                                &:hover {
                                    background: linear-gradient(to bottom, #5ba1e2, #3483ce);
                                }

                                img {
                                    margin: 0 8px;
                                    width: 20px;
                                    height: 20px;
                                }

                                span {
                                    margin-bottom: 3px;
                                    display: inline-block;
                                    color: #f8f8f8;
                                }
                            }

                            .collect {
                                margin-left: 8px;
                                border: 1px solid #ccc;
                                background-color: #fdfdfd;
                                background: linear-gradient(to bottom, #fefefe, #f1f1f1);

                                &:hover {
                                    background: linear-gradient(to bottom, #fff, #f9f9f9);

                                }

                                img {
                                    margin: 0 8px;
                                    width: 20px;
                                    height: 20px;
                                }

                                span {
                                    display: block;
                                    padding-right: 10px;
                                }
                            }
                        }

                        .nav_right {
                            width: 90px;
                            height: 32px;
                            line-height: 32px;
                            background: linear-gradient(to bottom, #fefefe, #f1f1f1);
                            margin-right: 15px;
                            border-radius: 5px;
                            position: relative;

                            &:hover {
                                background: linear-gradient(to bottom, #fff, #f9f9f9);

                                .right_list {
                                    display: block;
                                }
                            }

                            .right_song {
                                margin-left: 10px;
                                font-size: 14px;
                                display: flex;
                                align-items: center;
                                cursor: pointer;

                                i {
                                    width: 20px;
                                    height: 20px;
                                    background-image: url(../../assets/img/Icon_up.png);
                                    background-size: cover;

                                }
                            }

                            .right_list {
                                display: none;
                                width: 88px;
                                position: absolute;
                                z-index: 9999;

                                .SongClassification {
                                    font-size: 14px;
                                    height: 30px;
                                    width: 88px;
                                    line-height: 30px;
                                    color: #ccc;
                                    border: 1px solid #ccc;
                                    background-color: #ffffff;
                                    text-align: center;
                                    cursor: no-drop
                                }

                                .SongClassification:first-child {
                                    color: black;
                                    background-color: #e5e5e5;
                                    cursor: pointer;

                                }
                            }
                        }
                    }
                }

                .txet_title {
                    width: 100%;

                    .introduction {
                        width: 100%;

                        span {
                            font-size: 14px;
                        }

                        .introduction_first {
                            display: block;
                            border-left: 4px solid #c20c0c;
                            padding-left: 10px;
                            font-weight: bold;
                        }

                        .introduction_second {
                            margin-top: 5px;
                            font-size: 12px;
                            line-height: 2;
                            display: block;
                            white-space: pre-line;
                        }

                        .introduction_third {
                            margin-top: 15px;
                            display: block;
                            font-weight: bold;
                        }
                    }
                }
            }
        }

        .Details_Right {
            width: 28%;
            background-color: #fff;

            .sameSinger {
                width: 80%;
                margin-top: 35px;
                margin-left: 10%;

                .nav {
                    width: 100%;
                    border-bottom: 2px solid #ccc;

                    span {
                        font-size: 14px;
                        font-weight: bold;
                    }
                }

                .img_box {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .Sameimg {
                        height: 100px;
                        width: 60px;
                        // background-color: #3483ce;
                        text-align: center;
                        cursor: pointer;

                        img {
                            width: 100%;
                            height: 60px;
                        }

                        span {
                            display: block;
                            padding: 5px;
                            font-size: 14px;
                            //一行文本溢出隐藏
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }

                .download {
                    padding: 15px 0;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    .downiphone {
                        width: 48px;
                        height: 48px;
                        cursor: pointer;

                        &:hover .one {
                            display: none;
                        }

                        &:hover .two {
                            display: block;
                        }

                        .one {
                            display: block;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .two {
                            display: none;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }

                    .downpc {
                        width: 60px;
                        height: 48px;
                        cursor: pointer;

                        &:hover .one {
                            display: none;
                        }

                        &:hover .two {
                            display: block;
                        }

                        .one {
                            display: block;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .two {
                            display: none;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }

                    .downarphone {
                        width: 48px;
                        height: 48px;
                        cursor: pointer;

                        &:hover .one {
                            display: none;
                        }

                        &:hover .two {
                            display: block;
                        }

                        .one {
                            display: block;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .two {
                            display: none;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }

                .songer {
                    display: block;
                    margin-bottom: 15px;
                    font-size: 14px;
                    color: #dbdbdb;
                }

                .last {
                    height: 30px;
                    display: flex;
                    align-items: center;

                    i {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background-image: url(../../assets/img/last1.png);
                    }

                    span {
                        display: inline-block;
                        font-size: 14px;
                        cursor: pointer;

                        &:hover {
                            border-bottom: 1px solid;
                        }
                    }
                }

                .last:last-child {
                    i {
                        background-image: url(../../assets/img/last2.png);
                    }
                }
            }
        }
    }
}</style>