
update user_exs
set notes = $2,
modifications = $3,
reps = $4,
sets = $5,
weight = $6,
hr = $7,
min = $8,
sec = $9
where user_ex_id = (
  select user_ex_id
from user_exs
where user_id = $10
  and ex_id = $11
);

select * from user_exs
where user_id = $10;