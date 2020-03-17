insert into user_exs(user_id, ex_id, modifications, notes, reps,
                     sets, weight, hr, min, sec)
values($1,
       $2,
       $3,
       $4,
       $5,
       $6,
       $7,
       $8,
       $9,
       $10);

select *
from user_exs
where user_id = $1;