export interface ActionHandler {
    execute(data: any): Promise<void>;
}
  