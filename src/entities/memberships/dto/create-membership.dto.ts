export class CreateMembershipDto {
  membership_id: number;
  client_id: number;
  type_id: number;
  start_date: Date;
  end_date: Date;
  status: string;
  price: number;
  sessions_used: number;
}



// create table
//   yoga_memberships (
//     membership_id bigint primary key generated always as identity,

//     client_id int,
//     type_id int, 

//     start_date timestamp with time zone,
//     end_date timestamp with time zone,
//     price decimal(10, 2),
//     sessions_used int,

//     foreign key (client_id) references yoga_clients (client_id),
//     foreign key (type_id) references yoga_membershiptypes (type_id)
//   );
