var word = bb.value;
var newword = nn.value;

function cli()
{
    if( word[word.length - 1] === newword[0] )
    {
        bb.value=newword;
        nn.value="";
    }
    else
        alert('땡');
}











