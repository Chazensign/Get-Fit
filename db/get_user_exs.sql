select user_ex_id,
       u.ex_id,
       exercise,
       equipment,
       exercisetype,
       majormuscle,
       minormuscle,
       modifications,
       example,
       reps,
       sets,
       weight,
       time,
       COALESCE(u.notes, e.notes) as notes
from user_exs u
join exercises e on e.ex_id = u.ex_id
where user_id = $1
  and majormuscle = $2;