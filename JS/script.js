window.onload = function()
{
    let num = this.document.getElementById('num')
    let list = this.document.getElementById('list')
    let btn = this.document.getElementById('btn')
    btn.onclick = function()
    {
        let n = parseInt(num.value)
        console.log("hii")
        for(let i=1;i<=n;i++)
        {
            list.innerHTML+='<li>'+i+'<l/li>'
        }
    }

}