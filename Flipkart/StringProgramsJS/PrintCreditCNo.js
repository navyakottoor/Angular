<!-- 7. WAP to print Credit-card number
   input:- '1111222233334444'
   output:- '1111-2222-3333-4444' -->

<script>

    let ccNo = '1111222233334444';
    let res = ccNo.replace(/(.{4})/g, '$1-').slice(0, -1);
    console.log(res);
</script>