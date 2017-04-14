export default function Node(data) {
    this.data = data;
    this.id = unique_id()
    this.parent = null;
    this.children = [];
}
