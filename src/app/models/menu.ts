/**
 * Created by yangyunqi on 2017/6/27.
 */
export class Menu {
  constructor(
    public id: number,
    public name: string,
    public childMenus: Array<ChildMenu>,
    public style?: string
  ) {}
}

export class ChildMenu {
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public style?: string
  ) {}
}
