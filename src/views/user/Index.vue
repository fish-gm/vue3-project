<template>
    <div class="MyHomePage">
        <!-- 头部信息 -->
        <div class="information">
            <div class="lf">
                <img :src="userInfo.avatarUrl" alt="">
            </div>
            <div class="rh">
                <div>
                    <div>
                        <div class="wenzi">{{ userInfo.nickname }}</div>
                    </div>
                    <button>编辑个人资料</button>
                </div>
                <div>
                    <div class="zk">
                        <div class="zk1">0</div>
                        <div class="zk1">动态</div>
                    </div>
                    <div class="zk">
                        <div class="zk1">1</div>
                        <div class="zk1">关注</div>
                    </div>

                    <div class="zk">
                        <div class="zk1">3</div>
                        <div class="zk1">粉丝</div>
                    </div>

                </div>
                <div>
                    <span>年龄 : </span>
                    <span>70后</span>
                </div>
                <div>
                    <p>社交网络</p>
                    <div></div>
                </div>
            </div>
        </div>

        <!-- 听歌排行 -->
        <div class="Listening ">

            <div>
                <div>
                    <p>听歌排行</p>
                    <p>累计听歌 <span>3</span>首</p>
                </div>
                <div>
                    <p>最近一周</p>
                    <span>|</span>
                    <p>所有时间</p>
                </div>
            </div>

            <ul>
                <li>
                    <div>
                        <p>1.</p>
                        <el-icon size="17px">
                            <VideoPlay />
                        </el-icon>
                        <p>我只能离开</p>
                        <p>-</p>
                        <p>哇大碗大碗大碗大碗</p>
                    </div>
                    <p>1次</p>
                </li>
                <li>
                    <div>
                        <p>1.</p>
                        <el-icon size="17px">
                            <VideoPlay />
                        </el-icon>
                        <p>我只能离开</p>
                        <p>-</p>
                        <p>哇大碗大碗大碗大碗</p>
                    </div>
                    <p>1次</p>
                </li>
                <li>
                    <div>
                        <p>1.</p>
                        <el-icon size="17px">
                            <VideoPlay />
                        </el-icon>
                        <p>我只能离开</p>
                        <p>-</p>
                        <p>哇大碗大碗大碗大碗</p>
                    </div>
                    <p>1次</p>
                </li>
            </ul>
        </div>
        <!-- 我创建的歌单 -->
        <div class="CreatePlaylist">
            <div>我创建的歌单 <span>(1)</span></div>
            <div class="list">
                <div>
                    <div>
                        <img src="../../assets/img/logo.jpg" alt="">
                        <div>
                            <div>
                                <div></div>
                                <div>0</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <p>ddwdwdwd</p>
                </div>
            </div>
        </div>
        <!-- 我收藏的歌单 -->
        <div class="playlist">
            <div>我收藏的歌单 <span>(1)</span></div>
            <div class="list">
                <div>
                    <div>
                        <img src="../../assets/img/logo.jpg" alt="">
                        <div>
                            <div>
                                <div></div>
                                <div>0</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <p>ddwdwdwd</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// 登录成功后，获取用户信息
const isLogin = computed(() => {
    return store.getters.isLogin
});
const userInfo = computed(() => {
    return store.getters.userInfo

});

// https://api.trtst.com/user/subcount

// const login = async () => {
//     const res1 = await proxy.$http.login()

//     console.log(res1);

// }
</script>


<style lang="less" scoped>
.wenzi {
    width: 100px;
}


.zk {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.zk1 {
    font-size: 20px;
}

* {
    padding: 0;
    margin: 0;
    list-style: none;
}

.MyHomePage {
    width: 90%;
    margin: auto;
    padding: 40px;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    box-sizing: border-box;

    .information {
        width: 100%;
        height: 188px;
        margin-bottom: 43px;
        display: flex;

        .lf {
            width: 188px;
            height: 188px;
            padding: 3px;
            box-sizing: border-box;
            margin-right: 20px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .rh {
            flex: 1;
            height: 168px;

            >div:nth-child(1) {
                height: 49px;
                margin-bottom: 10px;
                padding-bottom: 12px;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ccc;

                >div {
                    display: flex;

                    >div:nth-child(1) {
                        width: 125px;
                        height: 30px;
                        line-height: 30px;
                        color: #000;
                        font-size: 22px;
                        margin-top: 3px;
                    }

                    >div:nth-child(2) {
                        width: 65px;
                        height: 19px;
                        line-height: 19px;
                        margin: 8px 0 0 10px;
                        padding-left: 39px;
                        box-sizing: border-box;
                        background: url(../../assets/img/logo.jpg)no-repeat -135px -190px;
                    }

                }

                >button {
                    width: 112px;
                    height: 31px;
                    padding-right: 5px;
                    box-sizing: border-box;
                    outline: none;
                    border: 1px solid #ccc;
                }

            }

            >div:nth-child(2) {
                height: 41px;
                font-size: 12px;
                color: #666;
                margin-bottom: 15px;
                display: flex;

                >div {
                    width: 100px;
                    height: 30px;
                    padding: 0 40px 0 20px;

                }

                >div:nth-child(1) {
                    padding-left: 0;
                }
            }

            >div:nth-child(3) {
                height: 21px;
                line-height: 21px;
                font-size: 18px;
                color: #666;
                margin-bottom: 5px;
                padding-left: 28px;
                box-sizing: border-box;
                /* margin-top: 17px; */
                padding-top: 5px;
            }

            >div:nth-child(4) {
                height: 21px;
                font-size: 18px;
                color: #666;
                display: flex;
                margin-left: 28px;
                margin-top: 10px;

                >p {
                    margin-right: 20px;
                }

                >div {
                    width: 20px;
                    height: 20px;
                    background: url(../../assets/img/logo.jpg)no-repeat 0 -25px;
                }
            }
        }
    }

    .Listening {
        margin-bottom: 20px;

        >div:nth-child(1) {
            height: 35px;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #c20c0c;

            >div:nth-child(1) {
                display: flex;

                >p:nth-child(1) {
                    font-size: 20px;
                    margin-right: 5px;
                }

                >p:nth-child(2) {
                    font-size: 12px;
                    margin: 8px;
                }
            }

            >div:nth-child(2) {
                display: flex;
                align-items: center;
                font-size: 12px;

                >span {
                    margin: 0 5px;
                }
            }
        }

        ul {
            width: 100%;
            border: 1px solid #ccc;
            border-top: none;

            li {
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;

                >div {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: #666;

                    >p {
                        margin: 0 10px;
                    }

                    .el-icon {
                        &:hover {
                            color: #000;
                        }
                    }

                    >p:nth-child(3) {
                        color: #000;
                        font-weight: bold;
                    }

                    >p:nth-child(4) {
                        font-size: 12px;
                        margin: 0;
                    }

                    >p:nth-child(5) {
                        font-size: 12px;
                    }
                }

                >p {
                    width: 300px;
                    font-size: 14px;
                    color: #666;
                }
            }

            li:nth-child(2n) {
                background-color: #f7f7f7;
            }
        }
    }

    .CreatePlaylist,
    .playlist {
        width: 100%;

        >div:nth-child(1) {
            height: 35px;
            font-size: 20px;
            color: #333;
            border-bottom: 2px solid #c20c0c;
        }

        .list {
            width: 100%;
            margin-top: 20px;

            >div {
                width: 190px;
                height: 195px;
                padding: 0 0 30px 50px;
                margin-left: -50px;
                box-sizing: border-box;
                font-size: 12px;
                color: #333;

                >div {
                    width: 140px;
                    height: 140px;
                    position: relative;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    >div {
                        width: 100%;
                        height: 27px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        background: url(../../assets/img/coverall.png)no-repeat 0 -819px;

                        >div:nth-child(1) {
                            display: flex;
                            align-items: center;
                            margin-left: 5px;

                            >div:nth-child(1) {
                                width: 14px;
                                height: 11px;
                                background: url(../../assets/img/logo.jpg)no-repeat 0 -24px;
                                margin-right: 5px;
                            }

                            >div:nth-child(2) {
                                font-size: 12px;
                                color: #ccc;
                            }

                        }

                        >div:nth-child(2) {
                            width: 16px;
                            height: 17px;
                            background: url(../../assets/img/logo.jpg)no-repeat 0 0;
                            margin-right: 5px;
                        }
                    }
                }

                >p {
                    line-height: 20px;
                    margin: 8px 0 3px;
                    font-size: 14px;
                    color: #000;
                }
            }
        }
    }

}
</style>