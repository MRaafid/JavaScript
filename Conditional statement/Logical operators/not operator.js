function not(a)
    {
        console.log(!a);
    }

not('true');
not(1);
not('false'); // is a non empty string hence will be considered as "truthy" value
not(0);
not(-0);
not(''); // is empty string hence will be considered as "falsy" value
not();
not(false);
not(true);