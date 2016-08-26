export interface IAliens{
  type: string;
  submitted_by: number;
  description: string;

}

export interface IOccupation   {
  name: string;
  description: string;
}

export class Colonists {
  constructor(
  private name: string,
  public job_id: string,
  public age: string){}
}

export class Encounters {
  constructor(
    public atype: string,
    public action: string,
    public colonistId: string,
    private date: string){}
}
