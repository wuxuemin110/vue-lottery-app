<template>
    <div>
        <Headers title="实名认证" detail="" />
        <div class="userinfo">
            <p>
              <label>真实姓名</label>
              <input type="text" placeholder="需与本人身份证姓名保持一致"/>
            </p>
            <p>
              <label>身份证号</label>
              <input type="text" placeholder="需与本人身份证号保持一致"/>
            </p>
        </div>
        <p class="charge_btn"><button>确认提交</button></p>
        <p class="wenxintips">
        温馨提示：<br />
        1.用户实名作为领奖凭证，实名后不能在线更改，请仔
        细核准信息；<br />
        2.如需更改或有疑问，请联系客服；<br />
        </p>
        
    </div>
</template>
<script>
import Headers from '../common/NewHead'
export default {
    components:{
        Headers
    }
}
</script>
<style>
.userinfo{
    margin-top:80px;
    padding:0 0.4rem;
}
.userinfo p{
  height:1rem;
  line-height:1rem;
  color:#333;
  font-size:0.42rem;
  margin-bottom:0.4rem;
  font-family: SimHei;
}
.userinfo input {
    height:0.8rem;
    border-radius:5px;
    border:1px solid #ccc;
    margin-left:0.2rem;
    width:6rem;
    padding-left:0.2rem;
}
.charge_btn{
    margin-top:0.4rem;
    height:1rem;
    line-height:1rem;
    text-align:center;
}
.charge_btn button{
    width:7rem;
   background-image: linear-gradient(0deg, 
		#d20000 0%, 
		#ff2c2c 100%);
    color:#fff;
    font-size:0.4rem;
    border:none;
    height:1rem;
    border-radius:5px;
}
.wenxintips{
    margin:0.2rem;
    color:#999;
    font-size:0.35rem;
}
</style>

